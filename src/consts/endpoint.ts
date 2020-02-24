export let END_POINT = 'http://localhost:4004/api'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
} else {
    END_POINT = 'http://49.50.164.174:4004/api'
}