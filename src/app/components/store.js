"use client"; 

import { create } from 'zustand';  

const useDatePickerStore = create((set) => ({
  selectedDate: null,
  recurringType: 'none',
  setSelectedDate: (date) => set({ selectedDate: date }),
  setRecurringType: (type) => set({ recurringType: type }),
}));

export default useDatePickerStore;
