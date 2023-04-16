import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastPositionType, ToastSeverityType } from "primereact/toast";
import { NotificationSeverity } from "Types/Enums";

interface NotificationState {
  severity?: ToastSeverityType;
  summary: string;
  detail: string;
  isOpen: boolean;
  position: ToastPositionType;
}

interface ShowToastParams {
  severity?: ToastSeverityType;
  summary: string;
  detail: string;
  position?: ToastPositionType;
}

const initialState: NotificationState = {
  severity: NotificationSeverity.info,
  summary: '',
  detail: '',
  isOpen: false,
  position: 'bottom-right'
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ShowToastParams>) => {
      const {payload} = action;

      state.severity = payload.severity;
      state.detail = payload.detail;
      state.summary = payload.summary;
      state.isOpen = true;
      state.position = payload.position ?? state.position;
    },
    dismissToast: (state) => {
      state = initialState;
    }
  }
})

export const {showToast, dismissToast} = notificationSlice.actions;
export default notificationSlice.reducer;