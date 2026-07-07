// Priority levels
export const PRIORITIES = {
  HIGH: {
    id: 'high',
    label: 'High',
    color: '#ff4444',
    bgColor: '#ffebee',
    icon: '🔴',
    value: 3
  },
  MEDIUM: {
    id: 'medium',
    label: 'Medium',
    color: '#ff9800',
    bgColor: '#fff3e0',
    icon: '🟡',
    value: 2
  },
  LOW: {
    id: 'low',
    label: 'Low',
    color: '#4caf50',
    bgColor: '#e8f5e9',
    icon: '🟢',
    value: 1
  }
};

// Default categories
export const DEFAULT_CATEGORIES = [
  { id: 'work', name: 'Work', color: '#2196f3', icon: '💼' },
  { id: 'personal', name: 'Personal', color: '#9c27b0', icon: '👤' },
  { id: 'health', name: 'Health', color: '#4caf50', icon: '💪' },
  { id: 'education', name: 'Education', color: '#ff9800', icon: '📚' },
  { id: 'shopping', name: 'Shopping', color: '#f44336', icon: '🛒' },
  { id: 'other', name: 'Other', color: '#607d8b', icon: '📌' }
];

export const PRIORITY_OPTIONS = Object.values(PRIORITIES);
export const CATEGORY_OPTIONS = DEFAULT_CATEGORIES;