import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeminiService } from './services/gemini.service';
import { PlanRequest, Itinerary, Activity, DayPlan } from './models/itinerary.model';
import { PlannerFormComponent } from './components/planner-form/planner-form.component';
import { ItineraryViewComponent } from './components/itinerary-view/itinerary-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PlannerFormComponent, ItineraryViewComponent]
})
export class AppComponent {
  view = signal<'form' | 'loading' | 'itinerary' | 'error'>('form');
  itinerary = signal<Itinerary | null>(null);
  error = signal<string | null>(null);
  lastPlanRequest = signal<PlanRequest | null>(null);

  constructor(private geminiService: GeminiService) {}

  async handlePlanRequest(planRequest: PlanRequest) {
    this.view.set('loading');
    this.itinerary.set(null);
    this.error.set(null);
    this.lastPlanRequest.set(planRequest);
    try {
      const result = await this.geminiService.generateItinerary(planRequest);
      this.itinerary.set(result);
      this.view.set('itinerary');
    } catch (err) {
      const errorMessage = (err instanceof Error) ? err.message : 'Sorry, we couldn\'t generate your itinerary. Please try again later.';
      this.error.set(errorMessage);
      this.view.set('error');
      console.error(err);
    }
  }

  handleItineraryUpdate(update: { dayIndex: number; activityIndex: number; newActivity: Activity; }) {
      this.itinerary.update(currentItinerary => {
          if (!currentItinerary) return null;
          
          const newDailyPlan = [...currentItinerary.dailyPlan];
          const dayToUpdate = { ...newDailyPlan[update.dayIndex] };
          const newActivities = [...dayToUpdate.activities];
          newActivities[update.activityIndex] = update.newActivity;
          dayToUpdate.activities = newActivities;
          newDailyPlan[update.dayIndex] = dayToUpdate;
          
          return { ...currentItinerary, dailyPlan: newDailyPlan };
      });
  }

  startOver() {
    this.view.set('form');
    this.itinerary.set(null);
    this.error.set(null);
  }
}