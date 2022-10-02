import { Box, Stack, Typography } from "@mui/material";
import { findEventAttendees } from "../../helpers/user_selectors";
import EventDetails from "./EventDetails";
import EventMap from "./EventMap";
import JoinEventButton from "./JoinEventButton";

export default function IndividualEvent(props) {
  const { event, joinedEvents, usersData } = props;

  const attendeelist = findEventAttendees(event.id, usersData, joinedEvents);

  return (
    <Box flex={"row"}>
      <Box display="flex" justifyContent="center" alignItems="center" m={3}>
        <Typography variant="h4">{event.name}</Typography>
      </Box>
      <Box>
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <EventDetails
            description={event.description}
            image={event.image}
            name={event.name}
            attendeelist={attendeelist}
          />
          <EventMap
            start_time={event.start_time}
            end_time={event.end_time}
            lat={event.lat}
            lng={event.lng}
          />
        </Stack>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row-reverse", m: 5 }}>
        <JoinEventButton />
      </Box>
    </Box>
  );
}
