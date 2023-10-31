namespace Ex7.Models;

public class ErrorViewModel
{
    public string? RequestId { get; set; }

    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

   
}

public class info
{
    public string FName { get; set; }
    public string LName { get; set; }
    public string Rangeoftower { get; set; }
    public string Txtans { get; set; }
    public string Email { get; set; }
}

