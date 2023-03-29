package lt.techin.schedule.schedules.holidays;

import lt.techin.schedule.config.LithuanianHolidays;
import lt.techin.schedule.schedules.Schedule;
import lt.techin.schedule.schedules.holidays.HolidayPlan.HolidayPlan;
import lt.techin.schedule.schedules.planner.LocalDateComparator;
import lt.techin.schedule.schedules.planner.WorkDay;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

public class SetupHolidaysSetForSchedule {

    public static Set<Holiday> AddHolidaysByPlan(HolidayPlan holidayPlan, Schedule currentSchedule) {
        LocalDate start = holidayPlan.getDateFrom();
        LocalDate end = holidayPlan.getDateUntil();
        String holidayName = holidayPlan.getHolidayName();
        Set<Holiday> returnedHolidaysSet = new HashSet<>();
        long loopLength = start.datesUntil(end).count();
        //Loops for the amount of days to add
        for (long x = 0; x <= loopLength; x++) {
            LocalDate currentDate = start.plusDays(x);
            if (ShouldAddHoliday(currentDate, currentSchedule.getWorkingDays())) {
                returnedHolidaysSet.add(new Holiday(holidayName, currentSchedule, currentDate));
            }
        }
        return returnedHolidaysSet;
    }

    public static boolean ShouldAddHoliday(LocalDate dateToCheck, Set<WorkDay> workDays) {
        //Returns false if a localDate checked is a weekend
        if (dateToCheck.getDayOfWeek() == DayOfWeek.SATURDAY || dateToCheck.getDayOfWeek() == DayOfWeek.SUNDAY) {
            return false;
        }
        //Checks if it's a Lithuanian holiday
        if (!LithuanianHolidaySetup.IsItNotAnLithuanianHolidayDate(dateToCheck)) {
            return false;
        }
        //Checks if there are any assigned WorkDays in a holiday plan date range
        if (!workDays.isEmpty()) {
            return workDays.stream().noneMatch(workDay -> workDay.getDate().equals(dateToCheck));
        }
        return true;
    }

    public static boolean LookForHolidayDoublesByRange(LocalDate dateFrom, LocalDate dateUntil, Set<Holiday> setToCheck) {
        long looper = dateFrom.datesUntil(dateUntil).count();

        for (long x = 0; x < looper; x++) {
            //If holiday double is found, returns true
            if (LookForHolidayDoubles(dateFrom.plusDays(x), setToCheck)) {
                return true;
            }
        }
        return false;
    }

    public static boolean LookForHolidayDoubles(LocalDate dateToCheck, Set<Holiday> setToCheck) {
        return setToCheck.stream().anyMatch(holidayFromSet -> {
            if (holidayFromSet.getDate().isEqual(dateToCheck)) {
                return LithuanianHolidays.LITHUANIAN_HOLIDAYS.stream().noneMatch(lithuanianHoliday -> 0 ==
                        new LocalDateComparator().compare(lithuanianHoliday.getDate(), dateToCheck));
            } else {
                return false;
            }
        });
    }
}
