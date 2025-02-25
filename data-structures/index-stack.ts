class BrowserHistory {
    private urlStack:string[] = []

    constructor (){
        this.urlStack = []
    }

    getCurrentPage(){
        return this.urlStack[this.urlStack.length -1]
    }


    visitPage(url:string){
        this.urlStack.push(url)
    }

    goBack(){
        return this.urlStack.pop()
    }

}

const browser = new BrowserHistory()

browser.visitPage('https://www.google.com/?client=safari')
browser.visitPage('https://www.google.com/search?q=youtube&client=safari&sca_esv=6193782e9d54fa0a&sxsrf=AHTn8zq094g4D2KLKVC4DkEhAdfCcwCLtA%3A1740420479611&source=hp&ei=f7W8Z-D-IcqYwbkPgoehqQ4&iflsig=ACkRmUkAAAAAZ7zDj8XAydcJnSxmcQFPets6XzdWT9si&ved=0ahUKEwigusbD89yLAxVKTDABHYJDKOUQ4dUDCBg&uact=5&oq=youtube&gs_lp=Egdnd3Mtd2l6Igd5b3V0dWJlMg0QLhiABBgnGMkDGIoFMhAQABiABBixAxhDGIMBGIoFMhAQABiABBixAxhDGIMBGIoFMggQABiABBiSAzILEAAYgAQYkgMYigUyDRAAGIAEGLEDGBQYhwIyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyBRAAGIAESKYeUIAMWPUWcAV4AJABAJgBcKABsAOqAQMwLjS4AQPIAQD4AQGYAgmgAtoDqAIKwgIHECMYJxjqAsICCxAuGIAEGLEDGIMBwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICCBAuGIAEGLEDwgILEAAYgAQYsQMYigXCAg4QLhiABBixAxjRAxjHAcICBRAuGIAEmAMF8QUkRq4qEJAPb5IHAzUuNKAH6CM&sclient=gws-wiz') 
browser.visitPage('https://www.youtube.com')
browser.visitPage('https://www.youtube.com/results?search_query=mrbeast')


console.log (browser.getCurrentPage())
browser.goBack()
console.log(browser.getCurrentPage())
browser.goBack()
console.log(browser.getCurrentPage())
browser.goBack()
console.log (browser.getCurrentPage())
browser.goBack()
console.log(browser.getCurrentPage())
browser.goBack()

