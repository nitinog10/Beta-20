
import { Component, ChangeDetectionStrategy, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRequest } from '../../models/itinerary.model';

type PlanType = 'Single Destination' | 'Multi-City Plan';
type Interest = 'Heritage' | 'Nature' | 'Food' | 'Adventure' | 'Wellness' | 'Culture';
type Budget = 'Low' | 'Medium' | 'Premium';
type TravelMode = 'Train' | 'Flight' | 'Bus' | 'Self-Drive';

@Component({
  selector: 'app-planner-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planner-form.component.html',
  styleUrls: ['./planner-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerFormComponent {
  planRequest = output<PlanRequest>();
  
  planType = signal<PlanType>('Single Destination');
  destination = signal('');
  
  interests: Interest[] = ['Heritage', 'Nature', 'Food', 'Adventure', 'Wellness', 'Culture'];
  selectedInterests = signal<Set<Interest>>(new Set());
  
  startDate = signal('');
  endDate = signal('');
  
  budgets: Budget[] = ['Low', 'Medium', 'Premium'];
  selectedBudget = signal<Budget>('Medium');

  travelModes: TravelMode[] = ['Train', 'Flight', 'Bus', 'Self-Drive'];
  selectedTravelMode = signal<TravelMode>('Train');

  setPlanType(type: PlanType) {
    this.planType.set(type);
  }

  toggleInterest(interest: Interest) {
    this.selectedInterests.update(current => {
      const newSet = new Set(current);
      if (newSet.has(interest)) {
        newSet.delete(interest);
      } else {
        newSet.add(interest);
      }
      return newSet;
    });
  }

  selectBudget(budget: Budget) {
    this.selectedBudget.set(budget);
  }

  selectTravelMode(mode: TravelMode) {
    this.selectedTravelMode.set(mode);
  }

  isFormValid() {
    return this.destination() && this.startDate() && this.endDate() && this.selectedInterests().size > 0;
  }

  generateItinerary() {
    if (!this.isFormValid()) {
      alert('Please fill all required fields: Destination, Interests, Start Date, and End Date.');
      return;
    }
    this.planRequest.emit({
      destination: this.destination(),
      interests: Array.from(this.selectedInterests()),
      startDate: this.startDate(),
      endDate: this.endDate(),
      budget: this.selectedBudget(),
      travelMode: this.selectedTravelMode(),
    });
  }
}
