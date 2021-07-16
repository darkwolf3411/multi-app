export const API = {
    async weatherApi(city = 'Omsk') {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1c59d4f479ddbd1bf766d742977689c1`
        try {
            let response = await fetch(url)
            let commits = await response.json()
            return commits
        } catch (error) {
            alert(error)
        }
        return null
    }
}