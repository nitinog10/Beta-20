
import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Itinerary, PlanRequest, Activity, DayPlan } from '../../models/itinerary.model';
import { GeminiService } from '../../services/gemini.service';

interface ChatMessage {
  sender: 'user' | 'bot' | 'options';
  text?: string;
  options?: Activity[];
}

@Component({
  selector: 'app-itinerary-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itinerary-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItineraryViewComponent {
  itinerary = input.required<Itinerary>();
  planRequest = input.required<PlanRequest>();
  itineraryUpdate = output<{ dayIndex: number, activityIndex: number, newActivity: Activity }>();
  newSearch = output<void>();

  // Chatbot state
  isChatOpen = signal(false);
  chatMessages = signal<ChatMessage[]>([]);
  isBotThinking = signal(false);
  userInput = signal('');
  
  // Modification context
  modificationContext = signal<{ dayIndex: number; activityIndex: number; activity: Activity } | null>(null);

  constructor(private geminiService: GeminiService) {}

  openChatForModification(dayIndex: number, activityIndex: number, activity: Activity) {
    this.modificationContext.set({ dayIndex, activityIndex, activity });
    this.chatMessages.set([
      { sender: 'bot', text: `You want to change the activity "${activity.name}". What would you like to do instead?` }
    ]);
    this.isChatOpen.set(true);
  }

  async sendChatMessage() {
    const messageText = this.userInput().trim();
    if (!messageText || this.isBotThinking()) return;
    
    this.chatMessages.update(m => [...m, { sender: 'user', text: messageText }]);
    this.userInput.set('');
    this.isBotThinking.set(true);

    const context = this.modificationContext();
    const planReq = this.planRequest();

    if (context) {
        try {
            const dayPlan = this.itinerary().dailyPlan[context.dayIndex];
            const alternatives = await this.geminiService.getAlternativeActivities(dayPlan, messageText, planReq.destination, planReq.interests);
            this.chatMessages.update(m => [...m, { sender: 'bot', text: 'Here are a few alternatives:' }, { sender: 'options', options: alternatives }]);
        } catch (error) {
            console.error(error);
            this.chatMessages.update(m => [...m, { sender: 'bot', text: 'I had trouble finding alternatives. Please try again.' }]);
        } finally {
            this.isBotThinking.set(false);
        }
    }
  }

  selectAlternative(alternative: Activity) {
    const context = this.modificationContext();
    if (context) {
      this.itineraryUpdate.emit({
        dayIndex: context.dayIndex,
        activityIndex: context.activityIndex,
        newActivity: alternative
      });
      this.closeChat();
    }
  }
  
  closeChat() {
    this.isChatOpen.set(false);
    this.userInput.set('');
    this.modificationContext.set(null);
  }

  triggerNewSearch() {
    this.newSearch.emit();
  }
}
