import React, { useState } from 'react';

export function TripPlannerPage({ setCurrentPage }) {
    const [formData, setFormData] = useState({
        destination: '',
        interests: [],
        budget: 'medium',
        travelMode: 'train'
    });
    const [loading, setLoading] = useState(false);
    const [itinerary, setItinerary] = useState(null);
    const [activeTab, setActiveTab] = useState('ai');
    const [aiInsights, setAiInsights] = useState(null);

    const handleInterestChange = (interest, checked) => {
        setFormData(prev => ({
            ...prev,
            interests: checked
                ? [...prev.interests, interest]
                : prev.interests.filter(i => i !== interest)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.destination || formData.interests.length === 0) {
            alert('Please fill destination and select interests');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/generate-itinerary', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            setItinerary(data.itinerary);
            setAiInsights(data.insights);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to generate itinerary');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
                <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-102 transition-transform duration-300">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Plan Your Trip</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <input 
                                type="text"
                                placeholder="Where do you want to go?"
                                value={formData.destination}
                                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            
                            <select
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="budget">Budget</option>
                                <option value="medium">Medium</option>
                                <option value="luxury">Luxury</option>
                            </select>
                            
                            <select
                                value={formData.travelMode}
                                onChange={(e) => setFormData({ ...formData, travelMode: e.target.value })}
                                className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="train">Train</option>
                                <option value="bus">Bus</option>
                                <option value="flight">Flight</option>
                            </select>
                            
                            <div className="flex flex-wrap gap-2">
                                {['Culture', 'Adventure', 'Nature', 'Food', 'Shopping'].map(interest => (
                                    <label key={interest} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={formData.interests.includes(interest)}
                                            onChange={(e) => handleInterestChange(interest, e.target.checked)}
                                            className="form-checkbox text-indigo-600 h-5 w-5"
                                        />
                                        <span>{interest}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                            disabled={loading}
                        >
                            {loading ? 'Planning your trip...' : 'Generate Itinerary'}
                        </button>
                    </form>
                </div>

                <div className="flex space-x-4">
                    <button
                        onClick={() => setActiveTab('ai')}
                        className={`px-4 py-2 rounded-lg ${activeTab === 'ai' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                    >
                        AI Planner
                    </button>
                    <button
                        onClick={() => setActiveTab('smart')}
                        className={`px-4 py-2 rounded-lg ${activeTab === 'smart' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                    >
                        Smart Planner
                    </button>
                </div>

                {activeTab === 'ai' && itinerary && (
                    <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
                        <h3 className="text-xl font-bold mb-4 text-indigo-600">Your AI-Generated Itinerary</h3>
                        <div className="prose max-w-none">
                            {itinerary.split('\n').map((line, index) => (
                                <p key={index} className="mb-2">{line}</p>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentPage('explore')}
                            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                        >
                            View on Map
                        </button>
                    </div>
                )}

                {activeTab === 'smart' && (
                    <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
                        <h3 className="text-xl font-bold mb-4 text-indigo-600">Smart Travel Insights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {aiInsights && aiInsights.map((insight, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-300">
                                    <h4 className="font-semibold text-lg mb-2">{insight.title}</h4>
                                    <p className="text-gray-700">{insight.description}</p>
                                    {insight.image && (
                                        <img
                                            src={insight.image}
                                            alt={insight.title}
                                            className="mt-2 rounded-lg shadow-md w-full h-48 object-cover"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}