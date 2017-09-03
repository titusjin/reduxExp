// Using es6 syntax is workable cause currently all A++ browser supports
export default (state, action) => {
    // most important things are : always return
    // totally fresh javascritp - plain- object
    // Never do things like : state.xxx = ''; reutrn state
    return [
        { title: 'Javascript: The Good Parts', pages: 101 },
        { title: 'Harry Potter', pages: 39 },
        { title: 'The Dark Tower', pages: 85 },
        { title: 'Eloquent Ruby', pages: 1 }
    ];
}
