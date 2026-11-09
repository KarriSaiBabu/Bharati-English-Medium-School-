export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  bio: string;
  subjects: string[];
  email: string;
  avatarColor: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Celebration' | 'Exams';
  location: string;
  description: string;
  badge?: string;
  circularNo?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: 'Urgent' | 'Academic' | 'Administrative' | 'Extracurricular';
  summary: string;
  content: string;
  pinned?: boolean;
  docUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Classrooms' | 'Academics' | 'Sports' | 'Science & STEM' | 'Cultural' | 'Achievements';
  imageUrl: string;
  caption: string;
  year: string;
  highlight?: string;
}

export interface SchoolFacility {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}
