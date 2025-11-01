import React, { useState } from 'react';
import { PlannerFormComponent } from './planner-form/planner-form.component';
import { ItineraryViewComponent } from './itinerary-view/itinerary-view.component';

export function TripPlannerPage() {
    const [itinerary, setItinerary] = useState(null);
    
    const handlePlanRequest = async (request) => {
        // Show loading state in itinerary view
        setItinerary({ 
            title: "Generating your personalized itinerary...",
            heroImageUrl: null,
            dailyPlan: []
        });
        
        try {
            // Call the backend to generate itinerary
            const response = await fetch('/api/generate-itinerary', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request)
            });
            
            const generatedItinerary = await response.json();
            setItinerary(generatedItinerary);
        } catch (error) {
            console.error('Failed to generate itinerary:', error);
            setItinerary({ 
                title: "Error generating itinerary",
                heroImageUrl: null,
                dailyPlan: []
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-8">
            <div className="container mx-auto px-4">
                {!itinerary ? (
                    <PlannerFormComponent onSubmit={handlePlanRequest} />
                ) : (
                    <ItineraryViewComponent 
                        itinerary={itinerary} 
                        onNewSearch={() => setItinerary(null)} 
                    />
                )}
            </div>
        </div>
    );
}