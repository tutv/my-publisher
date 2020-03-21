module.exports = (args) => {
    const object = {
        args,
        data: {}
    }

    object.setValue = (field, value) => {
        const {data} = object

        object.data = Object.assign({}, data, {
            [field]: value
        })

        return object.data
    }

    object.getValue = (field) => {
        const {data} = object
        const {[field]: value} = Object.assign({}, data)

        return value
    }

    object.getData = () => {
        const {data} = object

        return Object.assign({}, data)
    }

    object.getArgs = () => {
        const {args} = object

        return Object.assign({}, args)
    }

    return object
}

