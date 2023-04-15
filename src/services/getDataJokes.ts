export async function getDataJokes(){
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/random?category={category}').then(res => res.json());
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}