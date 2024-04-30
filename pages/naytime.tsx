
export default function NayTime() {

    const lastPayCheckDate = "02/01/2024"
    const goalDate = "06/14/2024"
    const currentPtoHours = 14.3
    const hoursOff = 8
    const holidays = 1
    const ptoPercentage = .0635 //rate of accruing pto for each hour worked

    const timeDiff = new Date(goalDate).getTime() - new Date(lastPayCheckDate).getTime()
    const totalTimeFrameDays =  Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    const workDaysFromTotal = Math.floor(totalTimeFrameDays / 14) * 10 // Divide into # of pay period, then multiply by 10 since there are 10 working days in each pay period (normally)
    const totalWorkHours = workDaysFromTotal * 8 - hoursOff - (holidays * 8)

    const expectedPtoHoursAmount = (totalWorkHours * ptoPercentage) + currentPtoHours - hoursOff
    const expectedPtoDays = (expectedPtoHoursAmount / 8).toFixed(2)

    return (
        <div className="flex flex-col w-full">
            <p>Last paycheck date: {lastPayCheckDate}</p>
            <p>Goal date: {goalDate}</p>
            <p>Current hours: {currentPtoHours}</p>
            <p>Hours off during time frame: {hoursOff}</p>
            <p>Holidays: {holidays}</p>
            
            <p>Total paychecks: {workDaysFromTotal / 10}</p>

            <p>Expected pto days by {goalDate}: {expectedPtoDays}</p>
            <p>Expected pto hours by {goalDate}: {expectedPtoHoursAmount}</p>
        </div>
    )
}

/**
 * + 0.58
 */

