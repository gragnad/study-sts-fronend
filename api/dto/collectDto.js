function user(usernameTarget, passwordTarget, fullnameTarget, streetTarget, 
    cityTarget, stateTarget, zipTarget, phoneNumberTarget, enabledTarget) {
    const data = {
        username: usernameTarget,
        password: passwordTarget,
        fullname: fullnameTarget,
        street: streetTarget,
        city: cityTarget,
        state: stateTarget,
        zip: zipTarget,
        phoneNumber: phoneNumberTarget,
        enabled: enabledTarget
    };
    return data;
}

export default{
    user
}