import React, { useState, useEffect } from "react";
import "./AppScheduleView.css";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import allLocales from "@fullcalendar/core/locales-all";
import FullCalendar from "@fullcalendar/react";
import { Link, useParams } from "react-router-dom";

export function Schedule() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const params = useParams();

  useEffect(() => {
      fetch(`api/v1/schedules/${params.id}/lessons`)
        .then(response => response.json())
        .then(data => setSchedule(data))
        .catch(error => console.error(error));
  }, [params.id]
  );

  console.log(schedule)

  const events = schedule.map(schedule => ({
    title: `${schedule.subject.name}
      <br />
      Mokytojas: 
      ${schedule.teacher ? schedule.teacher.lName : ""} ${schedule.teacher ? schedule.teacher.fName : "nepasirinktas"}
      <br />
      Klasė: 
      ${schedule.classroom ? schedule.classroom.classroomName : "Klasė nepasirinkta"}
      <br />
      Laikas: 
      ${schedule.lessonStart} - ${schedule.lessonEnd}`,
    start: schedule.date,
    allDay: true,
  }));
  
  const renderEventContent = (eventInfo) => (
    <>
      <b>{eventInfo.timeText}</b>
      <div dangerouslySetInnerHTML={{ __html: eventInfo.event.title }} />
    </>
  );

  return (
    <div className="maincontainer">
      <div id="container">
        <FullCalendar
          locales={allLocales}
          locale={"lt"}
          plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          contentHeight="700px"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay"
          }}
          events={events}
          weekends={false}
          eventContent={renderEventContent}
        />
      </div>
    </div>
  );
  // return (
  //   <div className="maincontainer">
  //     <div id="container">
  //       <FullCalendar
  //         locales={allLocales}
  //         locale={"lt"}
  //         plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
  //         initialView="dayGridMonth"
  //         contentHeight="700px"
  //         events={events}
  //         weekends={false}
  //         eventContent={renderEventContent}
  //       />
  //     </div>
  //   </div>
  // );
  
}
