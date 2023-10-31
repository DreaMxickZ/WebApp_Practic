using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Ex7.Models;

namespace Ex7.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    

    public IActionResult Index(string rangeoftower, string fname , string lname , string txtans , string email)
    {
        info person = new info();
        person.Rangeoftower = rangeoftower;
        person.FName = fname;
        person.LName = lname;
        person.Txtans = txtans;
        person.Email = email;

        return View(person);
    }

    
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

