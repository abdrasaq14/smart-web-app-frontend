import { z } from 'zod';

const AlertHistoryRowSchema = z.object({
	id: z.number(),
	alert_id: z.string(),
	site: z.string(),
	zone: z.string(),
	district: z.string(),
	activity: z.string(),
	status: z.string(),
	time: z.string(),
});
export const AlertHistoryResponseSchema = z.object({
	count: z.number(),
	next: z.nullable(z.string()),
	previous: z.nullable(z.string()),
	results: z.array(AlertHistoryRowSchema),
});
export type ApiAlertHistoryRow = z.infer<typeof AlertHistoryRowSchema>;
export type ApiAlertHistory = z.infer<typeof AlertHistoryResponseSchema>;

// {
// 	"count": 100,
// 	"next": "http://127.0.0.1:8000/api/alerts/?page=2",
// 	"previous": null,
// 	"results": [
// 	{
// 		"id": 28,
// 		"alert_id": "ABU-27",
// 		"site": "Site - 27",
// 		"zone": "Zone - 27",
// 		"district": "District - 27",
// 		"activity": "Activity - 27",
// 		"status": "pending",
// 		"time": "2008-02-08T16:17:32.221320Z"
// 	},
// 	{
// 		"id": 2,
// 		"alert_id": "ABU-1",
// 		"site": "Site - 1",
// 		"zone": "Zone - 1",
// 		"district": "District - 1",
// 		"activity": "Activity - 1",
// 		"status": "pending",
// 		"time": "2008-04-11T05:09:34.097377Z"
// 	},
// 	{
// 		"id": 72,
// 		"alert_id": "ABU-71",
// 		"site": "Site - 71",
// 		"zone": "Zone - 71",
// 		"district": "District - 71",
// 		"activity": "Activity - 71",
// 		"status": "pending",
// 		"time": "2008-06-23T09:03:30.862427Z"
// 	},
// 	{
// 		"id": 84,
// 		"alert_id": "ABU-83",
// 		"site": "Site - 83",
// 		"zone": "Zone - 83",
// 		"district": "District - 83",
// 		"activity": "Activity - 83",
// 		"status": "pending",
// 		"time": "2008-06-28T21:31:39.939194Z"
// 	},
// 	{
// 		"id": 68,
// 		"alert_id": "ABU-67",
// 		"site": "Site - 67",
// 		"zone": "Zone - 67",
// 		"district": "District - 67",
// 		"activity": "Activity - 67",
// 		"status": "pending",
// 		"time": "2008-10-10T05:54:44.310621Z"
// 	},
// 	{
// 		"id": 47,
// 		"alert_id": "ABU-46",
// 		"site": "Site - 46",
// 		"zone": "Zone - 46",
// 		"district": "District - 46",
// 		"activity": "Activity - 46",
// 		"status": "pending",
// 		"time": "2008-12-24T23:26:50.619921Z"
// 	},
// 	{
// 		"id": 81,
// 		"alert_id": "ABU-80",
// 		"site": "Site - 80",
// 		"zone": "Zone - 80",
// 		"district": "District - 80",
// 		"activity": "Activity - 80",
// 		"status": "pending",
// 		"time": "2009-01-20T14:16:09.936546Z"
// 	},
// 	{
// 		"id": 40,
// 		"alert_id": "ABU-39",
// 		"site": "Site - 39",
// 		"zone": "Zone - 39",
// 		"district": "District - 39",
// 		"activity": "Activity - 39",
// 		"status": "pending",
// 		"time": "2009-03-12T14:14:56.257553Z"
// 	},
// 	{
// 		"id": 63,
// 		"alert_id": "ABU-62",
// 		"site": "Site - 62",
// 		"zone": "Zone - 62",
// 		"district": "District - 62",
// 		"activity": "Activity - 62",
// 		"status": "pending",
// 		"time": "2009-05-14T14:30:34.281150Z"
// 	},
// 	{
// 		"id": 22,
// 		"alert_id": "ABU-21",
// 		"site": "Site - 21",
// 		"zone": "Zone - 21",
// 		"district": "District - 21",
// 		"activity": "Activity - 21",
// 		"status": "pending",
// 		"time": "2009-05-24T12:55:53.322150Z"
// 	},
// 	{
// 		"id": 51,
// 		"alert_id": "ABU-50",
// 		"site": "Site - 50",
// 		"zone": "Zone - 50",
// 		"district": "District - 50",
// 		"activity": "Activity - 50",
// 		"status": "pending",
// 		"time": "2009-06-15T04:09:24.398017Z"
// 	},
// 	{
// 		"id": 37,
// 		"alert_id": "ABU-36",
// 		"site": "Site - 36",
// 		"zone": "Zone - 36",
// 		"district": "District - 36",
// 		"activity": "Activity - 36",
// 		"status": "pending",
// 		"time": "2009-11-12T01:25:27.284878Z"
// 	},
// 	{
// 		"id": 34,
// 		"alert_id": "ABU-33",
// 		"site": "Site - 33",
// 		"zone": "Zone - 33",
// 		"district": "District - 33",
// 		"activity": "Activity - 33",
// 		"status": "pending",
// 		"time": "2009-12-17T13:43:59.064730Z"
// 	},
// 	{
// 		"id": 70,
// 		"alert_id": "ABU-69",
// 		"site": "Site - 69",
// 		"zone": "Zone - 69",
// 		"district": "District - 69",
// 		"activity": "Activity - 69",
// 		"status": "pending",
// 		"time": "2010-05-14T23:00:12.047536Z"
// 	},
// 	{
// 		"id": 26,
// 		"alert_id": "ABU-25",
// 		"site": "Site - 25",
// 		"zone": "Zone - 25",
// 		"district": "District - 25",
// 		"activity": "Activity - 25",
// 		"status": "pending",
// 		"time": "2010-05-19T12:10:08.578785Z"
// 	},
// 	{
// 		"id": 24,
// 		"alert_id": "ABU-23",
// 		"site": "Site - 23",
// 		"zone": "Zone - 23",
// 		"district": "District - 23",
// 		"activity": "Activity - 23",
// 		"status": "pending",
// 		"time": "2010-06-28T02:52:32.139787Z"
// 	},
// 	{
// 		"id": 59,
// 		"alert_id": "ABU-58",
// 		"site": "Site - 58",
// 		"zone": "Zone - 58",
// 		"district": "District - 58",
// 		"activity": "Activity - 58",
// 		"status": "pending",
// 		"time": "2010-08-22T18:47:35.606585Z"
// 	},
// 	{
// 		"id": 15,
// 		"alert_id": "ABU-14",
// 		"site": "Site - 14",
// 		"zone": "Zone - 14",
// 		"district": "District - 14",
// 		"activity": "Activity - 14",
// 		"status": "pending",
// 		"time": "2010-09-03T17:09:47.678105Z"
// 	},
// 	{
// 		"id": 99,
// 		"alert_id": "ABU-98",
// 		"site": "Site - 98",
// 		"zone": "Zone - 98",
// 		"district": "District - 98",
// 		"activity": "Activity - 98",
// 		"status": "pending",
// 		"time": "2010-09-28T06:32:57.382115Z"
// 	},
// 	{
// 		"id": 20,
// 		"alert_id": "ABU-19",
// 		"site": "Site - 19",
// 		"zone": "Zone - 19",
// 		"district": "District - 19",
// 		"activity": "Activity - 19",
// 		"status": "pending",
// 		"time": "2010-11-25T01:03:22.244609Z"
// 	},
// 	{
// 		"id": 77,
// 		"alert_id": "ABU-76",
// 		"site": "Site - 76",
// 		"zone": "Zone - 76",
// 		"district": "District - 76",
// 		"activity": "Activity - 76",
// 		"status": "pending",
// 		"time": "2011-02-06T09:24:40.940379Z"
// 	},
// 	{
// 		"id": 96,
// 		"alert_id": "ABU-95",
// 		"site": "Site - 95",
// 		"zone": "Zone - 95",
// 		"district": "District - 95",
// 		"activity": "Activity - 95",
// 		"status": "pending",
// 		"time": "2011-04-26T04:00:39.156376Z"
// 	},
// 	{
// 		"id": 6,
// 		"alert_id": "ABU-5",
// 		"site": "Site - 5",
// 		"zone": "Zone - 5",
// 		"district": "District - 5",
// 		"activity": "Activity - 5",
// 		"status": "pending",
// 		"time": "2011-06-22T04:41:26.632463Z"
// 	},
// 	{
// 		"id": 27,
// 		"alert_id": "ABU-26",
// 		"site": "Site - 26",
// 		"zone": "Zone - 26",
// 		"district": "District - 26",
// 		"activity": "Activity - 26",
// 		"status": "pending",
// 		"time": "2011-06-24T04:10:11.699076Z"
// 	},
// 	{
// 		"id": 80,
// 		"alert_id": "ABU-79",
// 		"site": "Site - 79",
// 		"zone": "Zone - 79",
// 		"district": "District - 79",
// 		"activity": "Activity - 79",
// 		"status": "pending",
// 		"time": "2011-07-20T14:23:27.017358Z"
// 	},
// 	{
// 		"id": 23,
// 		"alert_id": "ABU-22",
// 		"site": "Site - 22",
// 		"zone": "Zone - 22",
// 		"district": "District - 22",
// 		"activity": "Activity - 22",
// 		"status": "pending",
// 		"time": "2011-07-23T04:48:44.026451Z"
// 	},
// 	{
// 		"id": 94,
// 		"alert_id": "ABU-93",
// 		"site": "Site - 93",
// 		"zone": "Zone - 93",
// 		"district": "District - 93",
// 		"activity": "Activity - 93",
// 		"status": "pending",
// 		"time": "2011-10-06T23:51:12.232021Z"
// 	},
// 	{
// 		"id": 65,
// 		"alert_id": "ABU-64",
// 		"site": "Site - 64",
// 		"zone": "Zone - 64",
// 		"district": "District - 64",
// 		"activity": "Activity - 64",
// 		"status": "pending",
// 		"time": "2011-11-07T11:11:01.561785Z"
// 	},
// 	{
// 		"id": 100,
// 		"alert_id": "ABU-99",
// 		"site": "Site - 99",
// 		"zone": "Zone - 99",
// 		"district": "District - 99",
// 		"activity": "Activity - 99",
// 		"status": "pending",
// 		"time": "2012-04-27T22:55:54.110361Z"
// 	},
// 	{
// 		"id": 55,
// 		"alert_id": "ABU-54",
// 		"site": "Site - 54",
// 		"zone": "Zone - 54",
// 		"district": "District - 54",
// 		"activity": "Activity - 54",
// 		"status": "pending",
// 		"time": "2012-05-14T05:01:22.057356Z"
// 	},
// 	{
// 		"id": 45,
// 		"alert_id": "ABU-44",
// 		"site": "Site - 44",
// 		"zone": "Zone - 44",
// 		"district": "District - 44",
// 		"activity": "Activity - 44",
// 		"status": "pending",
// 		"time": "2012-08-16T00:59:13.970139Z"
// 	},
// 	{
// 		"id": 87,
// 		"alert_id": "ABU-86",
// 		"site": "Site - 86",
// 		"zone": "Zone - 86",
// 		"district": "District - 86",
// 		"activity": "Activity - 86",
// 		"status": "pending",
// 		"time": "2013-01-16T05:44:45.119263Z"
// 	},
// 	{
// 		"id": 69,
// 		"alert_id": "ABU-68",
// 		"site": "Site - 68",
// 		"zone": "Zone - 68",
// 		"district": "District - 68",
// 		"activity": "Activity - 68",
// 		"status": "pending",
// 		"time": "2013-02-17T08:08:03.947384Z"
// 	},
// 	{
// 		"id": 4,
// 		"alert_id": "ABU-3",
// 		"site": "Site - 3",
// 		"zone": "Zone - 3",
// 		"district": "District - 3",
// 		"activity": "Activity - 3",
// 		"status": "pending",
// 		"time": "2013-03-11T23:30:03.615788Z"
// 	},
// 	{
// 		"id": 46,
// 		"alert_id": "ABU-45",
// 		"site": "Site - 45",
// 		"zone": "Zone - 45",
// 		"district": "District - 45",
// 		"activity": "Activity - 45",
// 		"status": "pending",
// 		"time": "2013-04-13T19:48:33.142694Z"
// 	},
// 	{
// 		"id": 62,
// 		"alert_id": "ABU-61",
// 		"site": "Site - 61",
// 		"zone": "Zone - 61",
// 		"district": "District - 61",
// 		"activity": "Activity - 61",
// 		"status": "pending",
// 		"time": "2013-05-12T10:09:33.623377Z"
// 	},
// 	{
// 		"id": 16,
// 		"alert_id": "ABU-15",
// 		"site": "Site - 15",
// 		"zone": "Zone - 15",
// 		"district": "District - 15",
// 		"activity": "Activity - 15",
// 		"status": "pending",
// 		"time": "2013-09-19T05:54:08.437209Z"
// 	},
// 	{
// 		"id": 58,
// 		"alert_id": "ABU-57",
// 		"site": "Site - 57",
// 		"zone": "Zone - 57",
// 		"district": "District - 57",
// 		"activity": "Activity - 57",
// 		"status": "pending",
// 		"time": "2013-10-03T21:43:00.807910Z"
// 	},
// 	{
// 		"id": 88,
// 		"alert_id": "ABU-87",
// 		"site": "Site - 87",
// 		"zone": "Zone - 87",
// 		"district": "District - 87",
// 		"activity": "Activity - 87",
// 		"status": "pending",
// 		"time": "2014-01-06T00:29:55.701804Z"
// 	},
// 	{
// 		"id": 90,
// 		"alert_id": "ABU-89",
// 		"site": "Site - 89",
// 		"zone": "Zone - 89",
// 		"district": "District - 89",
// 		"activity": "Activity - 89",
// 		"status": "pending",
// 		"time": "2014-03-29T17:55:39.243173Z"
// 	},
// 	{
// 		"id": 64,
// 		"alert_id": "ABU-63",
// 		"site": "Site - 63",
// 		"zone": "Zone - 63",
// 		"district": "District - 63",
// 		"activity": "Activity - 63",
// 		"status": "pending",
// 		"time": "2014-03-30T02:21:39.477274Z"
// 	},
// 	{
// 		"id": 67,
// 		"alert_id": "ABU-66",
// 		"site": "Site - 66",
// 		"zone": "Zone - 66",
// 		"district": "District - 66",
// 		"activity": "Activity - 66",
// 		"status": "pending",
// 		"time": "2014-05-29T19:23:22.255777Z"
// 	},
// 	{
// 		"id": 36,
// 		"alert_id": "ABU-35",
// 		"site": "Site - 35",
// 		"zone": "Zone - 35",
// 		"district": "District - 35",
// 		"activity": "Activity - 35",
// 		"status": "pending",
// 		"time": "2014-10-31T07:34:22.833174Z"
// 	},
// 	{
// 		"id": 29,
// 		"alert_id": "ABU-28",
// 		"site": "Site - 28",
// 		"zone": "Zone - 28",
// 		"district": "District - 28",
// 		"activity": "Activity - 28",
// 		"status": "pending",
// 		"time": "2014-11-17T02:38:17.358104Z"
// 	},
// 	{
// 		"id": 1,
// 		"alert_id": "ABU-0",
// 		"site": "Site - 0",
// 		"zone": "Zone - 0",
// 		"district": "District - 0",
// 		"activity": "Activity - 0",
// 		"status": "pending",
// 		"time": "2015-01-04T19:39:14.259162Z"
// 	},
// 	{
// 		"id": 7,
// 		"alert_id": "ABU-6",
// 		"site": "Site - 6",
// 		"zone": "Zone - 6",
// 		"district": "District - 6",
// 		"activity": "Activity - 6",
// 		"status": "pending",
// 		"time": "2015-01-26T14:55:59.021257Z"
// 	},
// 	{
// 		"id": 8,
// 		"alert_id": "ABU-7",
// 		"site": "Site - 7",
// 		"zone": "Zone - 7",
// 		"district": "District - 7",
// 		"activity": "Activity - 7",
// 		"status": "pending",
// 		"time": "2015-03-23T21:28:10.533040Z"
// 	},
// 	{
// 		"id": 98,
// 		"alert_id": "ABU-97",
// 		"site": "Site - 97",
// 		"zone": "Zone - 97",
// 		"district": "District - 97",
// 		"activity": "Activity - 97",
// 		"status": "pending",
// 		"time": "2015-03-25T01:21:49.740720Z"
// 	},
// 	{
// 		"id": 82,
// 		"alert_id": "ABU-81",
// 		"site": "Site - 81",
// 		"zone": "Zone - 81",
// 		"district": "District - 81",
// 		"activity": "Activity - 81",
// 		"status": "pending",
// 		"time": "2015-06-09T07:23:38.839904Z"
// 	},
// 	{
// 		"id": 66,
// 		"alert_id": "ABU-65",
// 		"site": "Site - 65",
// 		"zone": "Zone - 65",
// 		"district": "District - 65",
// 		"activity": "Activity - 65",
// 		"status": "pending",
// 		"time": "2015-07-30T10:08:01.026228Z"
// 	}
// ]
// }
