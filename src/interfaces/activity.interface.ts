interface User {
  name: string;
  age: number;
  contactNumber: string;
}

interface Activity {
  description: string;
  timeSpent: string;
}

export interface ActivityFormData {
  user: User;
  activities: Activity[];
}
