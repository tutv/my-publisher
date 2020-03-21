module.exports = async (args, context) => {
    const {version: currentVersion} = context.getValue('packageJSON')
    console.log('currentVersion:', currentVersion)

    return context
}
