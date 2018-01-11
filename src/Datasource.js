import AppConfig from './App.Config'
const DataSource = {
    getProducts: async () => {
        let data = await (await (
            fetch(AppConfig.apiURL + '/products')
            .catch( (err) => {
                console.warn('ERROR:', err)
                return err
            })
        )).json()
        return data
    }
}

export default DataSource
