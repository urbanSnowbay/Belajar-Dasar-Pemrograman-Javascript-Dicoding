// [1] List of Abstraction
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone:', self.from)
});

// [2] Create object composition
const personalEnterprise = (from, message, store) => {
    // [3] Attribute
    const self = {
        from,
        message, 
        store
    };

    // [4] Method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created:', self.store)
    });
    
    // [5] Create object composition
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'Hei, produk baru nih', 'Dicoding store');
pe1.createCatalog();
pe1.sendMessage();

// Dari contoh kode di atas maka kita dapat membuat sebuah object dengan nama personalEnterprise tanpa harus melakukan pewarisan.

