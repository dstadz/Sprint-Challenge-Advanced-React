- [ ] Why would you use class component over function components (removing hooks from the question)?
    class components have lifecycle methods attached to them.
    you could not setState withing a funtional component, 

- [ ] Name three lifecycle methods and their purposes.
    constructor(): serves up withthe initial state data that it needs to have during intial render
    render(): tells react that when this method gets called, it should return some piece of DOM
    componentDidMont(): after the component has mounted this function runs. that means any async actions should happen within this function. 

- [ ] What is the purpose of a custom hook?
    they allow you to apply non-visual behavior and strateful logic throughout your components by reusing the same hook over and over. 

- [ ] Why is it important to test our apps?
    it is essential for sodtware quality: it discovers potential bugs faster, reduces regression risk, forces us to think of test cases