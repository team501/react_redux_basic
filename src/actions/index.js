/**
 * Redux App Settings Actions
 */
import { SET_TECHNOLOGY } from './types';

export const setTechnology = (tech) => ({
    type: SET_TECHNOLOGY,
    tech
});