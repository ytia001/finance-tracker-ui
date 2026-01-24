import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DataEntryRequest } from '../../features/main/entry-modal/entry-modal-control-service/entry-modal-control.service';
import { DataEntry } from '../../models/DataEntry';

@Injectable({ providedIn: 'root' })
export class MainService {
  private http = inject(HttpClient);

  private readonly baseUrl = '';

  /** CREATE */
  create(entry: DataEntryRequest): Observable<DataEntry> {
    // return this.http.post<DataEntry>(this.baseUrl, entry);
    return of({
      id: Math.random(),
      amount: entry.amount.toString(),
      date: entry.date.getTime(),
      category: entry.category,
    } as DataEntry);
  }

  //   /** READ (list) */
  //   getAll(): Observable<DataEntry[]> {
  //     return this.http.get<DataEntry[]>(this.baseUrl);
  //   }

  //   /** UPDATE */
  //   update(id: string, entry: Partial<DataEntry>): Observable<DataEntry> {
  //     return this.http.put<DataEntry>(`${this.baseUrl}/${id}`, entry);
  //   }

  //   /** DELETE */
  //   delete(id: string): Observable<{ success: boolean }> {
  //     return this.http.delete<{ success: boolean }>(
  //       `${this.baseUrl}/${id}`,
  //     );
  //   }
}
