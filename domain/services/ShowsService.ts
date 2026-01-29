import { Show } from "../models/Show";

export class ShowsService {
  getAll(): readonly Show[] {
    // TODO: Fetch from a real data source
    return [
        { id: '1', venue: 'Public Records', date: '2026-02-15' },
        { id: '2', venue: 'Nowadays', date: '2026-03-01' },
    ];
  }
}