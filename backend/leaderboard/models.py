from django.db import models
from django.conf import settings
from django.db import models
from django.core.validators import MaxValueValidator, FileExtensionValidator
# import json
# from sklearn.metrics import accuracy_score

# def answer_sheet():
#     fname_a = '/Users/jaewanpark/demo/demo/lead/answer/our_answers.json'
    
#     with open(fname_a , 'r', encoding='utf-8-sig') as f:
#         json_data = json.load(f)    
#     answer = []
#     for i in json_data:
#         answer.append(i['correct_idx'])
#     return answer
# answer = answer_sheet()

# fname = '/Users/jaewanpark/demo/demo/lead/submit/submit1.json'
# with open(fname , 'r', encoding='utf-8-sig') as f:
#     json_data = json.load(f)

# def submit_sheet(json_data):
#     submit = []
#     for i in json_data:
#         submit.append(i['correct_idx'])
#     return submit
# submit = submit_sheet(json_data)

# def convert_to_score(submit, answer):
#     accuracy_score(submit, answer)
#     score = accuracy_score(submit, answer, normalize=False)
#     return score
   

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class Post(TimestampedModel):    
    user = models.OneToOneField(settings.AUTH_USER_MODEL,related_name='+', on_delete=models.CASCADE)
    rank = models.CharField(max_length=2)    
    score = models.DecimalField(max_digits=6, decimal_places=3)
    accuracy = models.FileField(upload_to="leaderboard/post/%Y/%m/%d", max_length=100, validators=[FileExtensionValidator(['json'])])
    submit = models.PositiveIntegerField(validators=[MaxValueValidator(999)])
    s_round = models.PositiveIntegerField(validators=[MaxValueValidator(999)])
    