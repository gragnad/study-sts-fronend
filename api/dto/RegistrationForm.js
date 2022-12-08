

function regist(usernameTarget, passwordTarget, fullnameTarget, 
    streetTarget, cityTarget, stateTarget, zipTarget, phoneTarget) {
        const data = {
            username: usernameTarget,
            password: passwordTarget,
            fullname: fullnameTarget,
            street: streetTarget,
            city: cityTarget,
            state: stateTarget,
            zip: zipTarget,
            phone: phoneTarget
        };
    return data;
}


export default {
    regist
}