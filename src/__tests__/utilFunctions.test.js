import {shortenText} from '../utils/functions'
import {wordCount, attachUsername} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText should not alter a string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
});

test('shortenText should cut off extra characters after 100 and add three periods', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
});

test('wordCount should correctly count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
});

test('attachUserName should corretly attach a users full name to a post', () => {
    const newPosts = attachUsername(users, posts)
    const deletedPosts = posts[5]
    expect(newPosts).not.toContainEqual(deletedPosts)
});