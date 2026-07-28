export const getDoctors = async (link) => {
    const res = await fetch(link);
    const data = await res.json();
    return data;
}

 export const doctorsPromise = (data) => fetch(data).then(res=>res.json());