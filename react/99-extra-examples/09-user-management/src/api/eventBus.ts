/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */
// Bu dosya, uygulama genelinde olayları yönetmek için basit bir
// Publish/Subscribe (Yayınla/Abone Ol) sistemi sağlar.

type EventHandler = (...args: any[]) => void;

interface EventBus {
    on(event: string, callback: EventHandler): void;
    dispatch(event: string, ...args: any[]): void;
    off(event: string, callback: EventHandler): void;
}

const eventBus: EventBus = {
    on(event, callback) {
        document.addEventListener(event, (e: Event) => {
            // CustomEvent'in detail özelliğini kullanmak için tip kontrolü yapıyoruz.
            if ('detail' in e) {
                callback((e as CustomEvent).detail);
            }
        });
    },
    dispatch(event, ...args) {
        document.dispatchEvent(new CustomEvent(event, { detail: args }));
    },
    off(event, callback) {
        document.removeEventListener(event, callback as EventListener);
    },
};

export default eventBus;