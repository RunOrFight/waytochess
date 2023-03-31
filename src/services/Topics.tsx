import React, {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    useContext,
    useState
} from "react";
import { Topic } from "../types";

const TopicsContext = createContext<Topic[]>([]);

const TopicsUpdateContext = createContext<Dispatch<Topic[]> | null>(null);

export const useTopics = () => {
    const topics = useContext(TopicsContext);
    const setTopics = useContext(TopicsUpdateContext);

    const getAll = () => {
        return topics;
    };

    const getById = (id: number) => {
        return topics.find((topic) => topic.id === id)!;
    };

    const addOne = (nameAndDesc: Omit<Omit<Topic, "id">, "lessons">) => {
        setTopics!([
            ...topics,
            { ...nameAndDesc, id: topics.length + 1, lessons: [] }
        ]);
    };

    const updateById = (id: number, body: Partial<Topic>) => {
        setTopics!(
            topics.map((topic) =>
                topic.id === id ? { ...topic, ...body } : topic
            )
        );
    };

    return {
        getAll,
        getById,
        addOne,
        updateById
    };
};

interface TopicsPropviderProps extends PropsWithChildren {}

export const TopicsPropvider: FC<TopicsPropviderProps> = ({ children }) => {
    const [topics, setTopics] = useState<Topic[]>([]);

    return (
        <TopicsContext.Provider value={topics}>
            <TopicsUpdateContext.Provider value={setTopics}>
                {children}
            </TopicsUpdateContext.Provider>
        </TopicsContext.Provider>
    );
};
