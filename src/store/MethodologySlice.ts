import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Lesson, Topic} from "../types";
import {RootState} from "../types/Store";

interface MethodologyState {
    topics: Topic[],
    lessons: Lesson[]
}

const initialState: MethodologyState = {
    topics: [],
    lessons: []
}

interface UpdateTopicActionPayload {
    topicId: string,
    lesson: Lesson
}

const methodologySlice = createSlice({
    name: "methodology",
    initialState,
    reducers: {
        addTopic: (state, action: PayloadAction<Topic>) => {
            state.topics.push(action.payload)
        },
        addTopicLesson: (state, action: PayloadAction<UpdateTopicActionPayload>) => {
            const topic = methodologyTopicByIdSelector(action.payload.topicId)({methodology: state})

            if (topic) {
                topic.lessons.push(action.payload.lesson)
            }

        },
    }
})

const methodologyTopicsSelector = (state: RootState) => state.methodology.topics

const methodologyTopicByIdSelector = (id: string | undefined) => createSelector(methodologyTopicsSelector, (topics) => {
    return topics.find((topic) => topic.id === id)
})

export {methodologyTopicsSelector, methodologyTopicByIdSelector}
export const {addTopic, addTopicLesson} = methodologySlice.actions

export default methodologySlice.reducer