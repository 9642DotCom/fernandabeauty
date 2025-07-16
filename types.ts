export interface Service {
  name: string;
  description: string;
  applicationPrice: number;
  maintenancePrice?: number;
  duration?: string;
  image: string;
}

export type ModalType = 'address' | 'booking' | 'care';
