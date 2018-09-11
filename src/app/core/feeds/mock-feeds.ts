import {Report, Simuser} from '../../Interface/userinfo';
import { user1, user2, report1 } from '../../Interface/mock-user';

const LIKEFEED = {
  kind: 'like',
  date: '2 days ago',
  friend: user1,
  report: report1,
};
const FOLLOWFEED = {
  kind: 'follow',
  date: '2 days ago',
  friend: user1,
  otheruser: user2,
}
const UPLOADFEED = {
  kind: 'upload',
  date: '2 days ago',
  report: report1,
}
export const FEEDS: any[] = [
    LIKEFEED,
    FOLLOWFEED,
    UPLOADFEED,
  ];
