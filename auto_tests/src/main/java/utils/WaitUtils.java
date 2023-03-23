package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class WaitUtils {
    public  static void waitForJs (WebDriver driver){

        new WebDriverWait(driver, Duration.ofSeconds(3)).until(dr -> ((Long) ((JavascriptExecutor) dr)
                .executeScript("return jQuery.active") == 0));
    }
    public static WebElement getVisibleWithWait(WebElement webElement, WebDriver driver) {
        return new WebDriverWait(driver, Duration.ofSeconds(2))
                .until(ExpectedConditions.visibilityOf(webElement));
    }

    public static WebElement getElementWithWait(By by, WebDriver driver) {
        return new WebDriverWait(driver, Duration.ofSeconds(2))
                .until(ExpectedConditions.presenceOfElementLocated(by));
    }

    public static void waitPageToLoad(WebDriver driver) {
        /*
          Dabartinis sprendimas yra negalutinis.
          Reiketu geresnio budo kaip palaukti kol react uzkraus puslapio duomenis.
         */
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
