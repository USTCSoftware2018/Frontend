import { User, Report } from '../Interface/userinfo';

class Data {
  users: User[];
  reports: Report[];
}
class Ranks {
  users: number;
  db: number;
  reports: number;
}
class Time {
  end: string;
  start: string;
}
class Filters {
  label: string;
  people: string;
  time: Time;
}
export class SearchResult {
  name: string;
  data: Data;
  ranks: Ranks;
  filters: Filters;
  debug: string;
}
