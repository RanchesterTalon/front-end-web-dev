// TODO
const postData = async (url="", data={}) => {
    const res = await fetch(url, {
        method:"POST",
        creadentials:"same-origin",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await res.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}