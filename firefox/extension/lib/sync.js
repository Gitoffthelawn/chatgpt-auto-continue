// Requires lib/<settings|styles>.js + checkBtnsToClick() + gmToolbarMenu.refresh() (Greasemonkey only)

window.sync = {
    configToUI: async function({ key } = {}) { // on toolbar popup toggles + ChatGPT tab activations
        await settings.load('extensionDisabled', Object.keys(settings.controls))
        if (!app.config.extensionDisabled && !checkBtnsToClick.active) checkBtnsToClick()
        if (/notifBottom|toastMode/.test(key)) styles.update({ key: 'toast' })
        if (typeof GM_info != 'undefined') gmToolbarMenu.refresh() // prefixes/suffixes
    }
};
