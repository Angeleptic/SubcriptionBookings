import { Injectable } from '@angular/core';
import { SubcriptionStatus } from './subcription-status.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionStatusService {
  formData: SubcriptionStatus;
  constructor() { }
}
