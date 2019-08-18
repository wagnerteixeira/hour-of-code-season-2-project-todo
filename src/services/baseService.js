import baseService from './firebase/baseService';


export default (entityName) => {
    const _baseService = baseService(entityName);
    return {
        getAll: _baseService.getDocs,
        get: _baseService.getOneDoc,
        add: _baseService.createDoc,
        update: _baseService.updateDoc,
        remove: (entity) => _baseService.deleteDoc(entity.id)
    }
}
