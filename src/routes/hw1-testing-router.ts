import {Request, Response, Router} from "express"
export const hw1TestingRouter = Router({})

type AvailableResolutions = string[];

type VideosType =
{
        id: number;
        title: string;
        author: string;
        canBeDownloaded: boolean;
        minAgeRestriction: null | number;
        createdAt: string;
        publicationDate: string;
        availableResolutions: AvailableResolutions;
}

const dbVideos : VideosType[] = [];

hw1TestingRouter.delete('/all-data', (req: Request, res: Response) =>
{
    dbVideos.splice(0,dbVideos.length)
    res.sendStatus(204)
})