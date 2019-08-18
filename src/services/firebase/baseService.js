import { db } from './firebase';

export default (collection) => {
    const createDoc = async (doc) => {
        const docReference = await db.collection(collection).add(doc);
        return { id: docReference.id, ...(await docReference.get()).data() };
    }

    const deleteDoc = async (id) => {
         await db.collection(collection).doc(id).delete();
         return id;
    }

    const updateDoc = async (data) => {
        const docReference = db.collection(collection).doc(data.id);
        await docReference.update(data);
        return { id: docReference.id, ...(await docReference.get()).data() };
    }

    const getDocs = async () => {
        const querySnapshot = await db.collection(collection).get();
        return querySnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
        });
    };

    const getOneDoc = async (id) => {
        const docReference = db.collection(collection).doc(id);
        return { id: docReference.id, ...(await docReference.get()).data() };
    }

    return {
        createDoc,
        deleteDoc,
        updateDoc,
        getDocs,
        getOneDoc,
    };
};