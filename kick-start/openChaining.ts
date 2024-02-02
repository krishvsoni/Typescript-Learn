type Customer = {
    birthday: Date
};

function getCustomer(id: number):Customer | null {
    return id== 0 ? null : {birthday : new Date()};
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

let log: any = null;
log?.('a');