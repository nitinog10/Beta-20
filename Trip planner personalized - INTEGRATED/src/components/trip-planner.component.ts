import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlannerFormComponent } from './planner-form/planner-form.component';
import { ItineraryViewComponent } from './itinerary-view/itinerary-view.component';
import { PlanRequest, Itinerary } from '../models/itinerary.model';
import { GeminiService } from '../services/gemini.service';
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-trip-planner',
    standalone: true,
    imports: [CommonModule, PlannerFormComponent, ItineraryViewComponent],
    template: `
        <div class="min-h-screen bg-slate-900 text-white pt-8">
            <div class="container mx-auto px-4">
                @if (!currentItinerary()) {
                    <app-planner-form (planRequest)="handlePlanRequest($event)" />
                } @else {
                    <app-itinerary-view 
                        [itinerary]="currentItinerary()" 
                        (newSearch)="resetItinerary()" 
                    />
                }
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripPlannerComponent {
    currentItinerary = signal<Itinerary | null>(null);
    
    constructor(private geminiService: GeminiService) {}
    
    async handlePlanRequest(request: PlanRequest): Promise<void> {
        // Show loading state
        this.currentItinerary.set({ 
            title: "Generating your personalized itinerary...",
            heroImageUrl: null,
            dailyPlan: []
        });
        
        try {
            // Generate itinerary using the Gemini service
            const itinerary = await firstValueFrom(this.geminiService.generateItinerary(request));
            this.currentItinerary.set(itinerary);
        } catch (error: unknown) {
            console.error('Failed to generate itinerary:', error);
            this.currentItinerary.set({ 
                title: "Error generating itinerary",
                heroImageUrl: null,
                dailyPlan: []
            });
        }
    }
    
    resetItinerary(): void {
        this.currentItinerary.set(null);
    }
}