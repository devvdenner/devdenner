import { ISectionModel } from './Section.model';

export const useSectionViewModel = (props: ISectionModel) => {
    return { ...props };
};
