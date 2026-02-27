export interface NotificationButton {
    text: string;
    value?: any;
    className?: string;
    onClick?: () => void;
}

export interface NotificationOptions {
    type?: 'info' | 'success' | 'error' | 'warning' | 'processing';
    title?: string;
    message?: string;
    duration?: number;
    buttons?: NotificationButton[];
    isModal?: boolean;
    icon?: string;
    style?: Record<string, string | number>;
    theme?: 'auto' | 'light' | 'dark';
    position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    offsetX?: string | number;
    offsetY?: string | number;
}

export interface KDNotificationAPI {
    show(options: NotificationOptions): Promise<any>;
    close(): void;
}

declare const KDNotification: KDNotificationAPI;
export default KDNotification;