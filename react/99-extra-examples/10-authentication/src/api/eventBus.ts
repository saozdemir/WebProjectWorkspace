/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */
// Bu dosya, uygulama genelinde olayları yönetmek için basit bir
// Publish/Subscribe (Yayınla/Abone Ol) sistemi sağlar.
import mitt from 'mitt';
import {EventTypes} from "./eventTypes.ts";

// Olaylara karşılık gelen payload tiplerini burada tanımla
type Events = {
    [EventTypes.FORCE_LOGOUT]: void;
    [EventTypes.LOGIN_SUCCESS]: { username: string };
    [EventTypes.REFRESH_FAIL]: string;
};

// Type-safe emitter oluştur
const eventBus = mitt<Events>();

export default eventBus;