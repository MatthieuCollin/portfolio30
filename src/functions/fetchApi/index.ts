// permet de fetch l'api pour les gets, avec id ou non. A voir pour les posts mais je suis pas sur de moi
function fetchApi(actions: string, id:string, type:string, body:any) {
  return new Promise((resolve, reject) => {
    try {
      fetch(
        `${import.meta.env.VITE_API_LINK}${
          type
            ? `/api/${actions}/${type}${id ? `/${id}` : ""}`
            : `/api/${actions}${id ? `/${id}` : ""}`
        }`,
        {
          body: JSON.stringify(body),
        },
      ).then(async function (response) {
        switch (response.status) {
          case 401:
          case 403:
            window.location.href = "/non-authorized";
            break;
          case 200:
          case 301:
          case 304:
            let data = await response.json();
            if (data.length === 0) {
              data = ["-"];
            }
            resolve(data);
            break;
          case 405:
          case 404:
          case 500:
            window.alert(
              "une erreur est survenue, veuillez contacter votre administrateur",
            );
            break;
        }
      });
    } catch {
      alert("Erreur, veuillez attendre.");
    }
  });
}

export default fetchApi;
